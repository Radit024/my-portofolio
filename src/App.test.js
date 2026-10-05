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

it("switches to Finance mode with Curtains Doors transition and renders finance section", async () => {
  const {container} = await renderPortfolio();

  // Find finance toggle button in Header
  const financeBtn = screen.getByTitle("Switch to Finance Mode (Curtains Doors animation)");
  expect(financeBtn).toBeInTheDocument();

  // Click to trigger Curtains Doors transition to finance
  act(() => {
    fireEvent.click(financeBtn);
  });

  // Curtains Doors overlay should be active
  expect(container.querySelector(".motion-curtains-doors-container")).toBeInTheDocument();

  // Advance time past the door close (500ms + 180ms hold)
  act(() => {
    jest.advanceTimersByTime(700);
  });

  // Advance time past door reveal (500ms)
  act(() => {
    jest.advanceTimersByTime(500);
  });

  // Verify Finance content is rendered
  expect(screen.getByText("Torock Trading Bot")).toBeInTheDocument();
  expect(screen.getByText("BisnisKu / BusinessTracker")).toBeInTheDocument();
  expect(window.localStorage.getItem("portfolio_mode")).toBe("finance");
});

