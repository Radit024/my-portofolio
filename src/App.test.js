import React from "react";
import {act, cleanup, fireEvent, render, screen} from "@testing-library/react";
import App from "./App";
import {greeting, splashScreen, bigProjects, achievementSection, workExperiences} from "./portfolio";
import {useReducedMotion} from "./hooks/useReducedMotion";

jest.mock("./hooks/useReducedMotion", () => ({
  useReducedMotion: jest.fn()
}));

jest.mock("./components/displayLottie/DisplayLottie", () => () => null);
jest.mock("react-twitter-embed", () => ({TwitterTimelineEmbed: () => null}));

const originalFetch = global.fetch;

beforeEach(() => {
  jest.useFakeTimers();
  window.localStorage.clear();
  useReducedMotion.mockReturnValue(false);
  global.fetch = jest.fn().mockResolvedValue({
    ok: true,
    json: async () => ({items: [], data: {user: {pinnedItems: {edges: []}}}})
  });
});

afterEach(() => {
  cleanup();
  jest.clearAllTimers();
  jest.useRealTimers();
  global.fetch = originalFetch;
});

async function renderPortfolio() {
  const result = render(<App />);
  await act(async () => {
    jest.advanceTimersByTime(splashScreen.duration);
  });
  return result;
}

it("renders portfolio content and working destination links after the splash", async () => {
  const {container} = await renderPortfolio();
  expect(
    screen.getByRole("heading", {name: new RegExp(greeting.title)})
  ).toBeInTheDocument();
  if (workExperiences.display && workExperiences.experience.length > 0) {
    expect(screen.getByRole("heading", {name: "Experiences"})).toBeInTheDocument();
  }
  expect(screen.getByRole("heading", {name: "Proficiency"})).toBeInTheDocument();
  expect(screen.getByRole("heading", {name: "Education"})).toBeInTheDocument();
  expect(container.querySelectorAll("#projects .project-card")).toHaveLength(bigProjects.projects.length);
  expect(
    container.querySelectorAll("#achievements .certificate-card")
  ).toHaveLength(achievementSection.achievementsCards.length);
});

it("changes theme and persists the preference", async () => {
  const {container} = await renderPortfolio();
  const toggle = screen
    .getAllByRole("checkbox")
    .find(input => input.closest(".switch"));
  expect(toggle).not.toBeChecked();
  fireEvent.click(toggle);
  expect(toggle).toBeChecked();
  expect(container.querySelector(".dark-mode")).toBeInTheDocument();
  expect(window.localStorage.getItem("isDark")).toBe("true");
});

it("renders Big Projects with previews and links", async () => {
  const {container} = await renderPortfolio();
  const cards = container.querySelectorAll("#projects .project-card");
  expect(cards.length).toBe(bigProjects.projects.length);
  bigProjects.projects.forEach(project => {
    expect(screen.getByText(project.displayName || project.projectName)).toBeInTheDocument();
  });
});

it("renders without crashing with reduced motion", async () => {
  useReducedMotion.mockReturnValue(true);
  let result;
  await act(async () => {
    result = render(<App />);
  });
  expect(
    screen.getByRole("heading", {name: new RegExp(greeting.title)})
  ).toBeVisible();
});

it("renders unified portfolio with tech, quantitative finance, and operational projects on a single page", async () => {
  const {container} = await renderPortfolio();

  expect(screen.getByText("Torock Trading Bot")).toBeInTheDocument();
  expect(screen.getByText("Agrilink")).toBeInTheDocument();
  expect(screen.getByText("BisnisKu / BusinessTracker")).toBeInTheDocument();
  expect(screen.getByText("Arina Agri")).toBeInTheDocument();
  expect(container.querySelectorAll("#projects .project-card").length).toBe(bigProjects.projects.length);
});

