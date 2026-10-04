import React from "react";
import {
  act,
  cleanup,
  fireEvent,
  render,
  screen,
  within
} from "@testing-library/react";
import App from "./App";
import {
  greeting,
  splashScreen,
  achievementSection,
  bigProjects,
  contactInfo,
  socialMediaLinks,
  twitterDetails
} from "./portfolio";
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
  for (const name of [
    "Skills & Interests",
    "Tech Stack & Tools",
    "Experiences & Participation"
  ]) {
    expect(screen.getByRole("heading", {name})).toBeInTheDocument();
  }
  expect(container.querySelectorAll("#projects .project-card")).toHaveLength(5);
  expect(
    container.querySelectorAll("#achievements .certificate-card")
  ).toHaveLength(12);
  expect(screen.getByRole("link", {name: "Projects"})).toHaveAttribute(
    "href",
    "#projects"
  );
  expect(
    screen.getByRole("link", {
      name: "Show credential: Introduction to Financial Literacy"
    })
  ).toHaveAttribute(
    "href",
    achievementSection.achievementsCards[0].footerLink[0].url
  );
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

it("keeps gallery previews and every project and credential source intact", async () => {
  const {container} = await renderPortfolio();
  const cards = container.querySelectorAll("#projects .project-card");
  bigProjects.projects.forEach((project, index) => {
    const card = within(cards[index]);
    expect(card.getByRole("img", {name: project.imageAlt})).toHaveAttribute(
      "loading",
      "lazy"
    );
    expect(card.getByText(project.previewLabel)).toBeInTheDocument();
    project.footerLink.forEach(link => {
      expect(
        card.getByRole("link", {name: `${link.name}: ${project.projectName}`})
      ).toHaveAttribute("href", link.url);
    });
  });
  const credentials = container.querySelectorAll(
    "#achievements .certificate-card"
  );
  achievementSection.achievementsCards.forEach((credential, index) => {
    const card = within(credentials[index]);
    expect(credentials[index].querySelector("details")).not.toHaveAttribute(
      "open"
    );
    expect(
      card.getByText(`Credential ID: ${credential.credentialId}`)
    ).toBeInTheDocument();
    credential.footerLink.forEach(link => {
      expect(
        card.getByRole("link", {name: `${link.name}: ${credential.title}`})
      ).toHaveAttribute("href", link.url);
    });
  });
});

it("provides contact, embed fallback, and back-to-top destinations", async () => {
  await renderPortfolio();
  expect(
    screen.getByRole("link", {name: contactInfo.email_address})
  ).toHaveAttribute("href", `mailto:${contactInfo.email_address}`);
  const socials = within(
    screen.getByRole("navigation", {name: "Social profiles"})
  );
  expect(socials.getByRole("link", {name: "GitHub"})).toHaveAttribute(
    "href",
    socialMediaLinks.github
  );
  expect(socials.getByRole("link", {name: "LinkedIn"})).toHaveAttribute(
    "href",
    socialMediaLinks.linkedin
  );
  expect(
    screen.getByRole("link", {name: `View @${twitterDetails.userName} on X`})
  ).toHaveAttribute("href", `https://x.com/${twitterDetails.userName}`);
  expect(screen.getByRole("link", {name: /Back to top/i})).toHaveAttribute(
    "href",
    "#greeting"
  );
});

it("shows readable content immediately when reduced motion is requested", async () => {
  useReducedMotion.mockReturnValue(true);
  let result;
  await act(async () => {
    result = render(<App />);
  });
  expect(
    screen.getByRole("heading", {name: new RegExp(greeting.title)})
  ).toBeVisible();
  const hero = result.container.querySelector(".greeting-text-div");
  expect(hero.style.opacity).toBe("1");
  expect(hero.style.transform).toBe("none");
  expect(
    result.container.querySelectorAll("#achievements .certificate-card")
  ).toHaveLength(12);
});

it("keeps the portfolio mounted when motion is re-enabled after skipping the splash", async () => {
  useReducedMotion.mockReturnValue(true);
  let result;
  await act(async () => {
    result = render(<App />);
  });
  const heading = screen.getByRole("heading", {
    name: new RegExp(greeting.title)
  });
  useReducedMotion.mockReturnValue(false);
  await act(async () => result.rerender(<App />));
  expect(screen.getByRole("heading", {name: new RegExp(greeting.title)})).toBe(
    heading
  );
});
