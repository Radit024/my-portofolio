import React from "react";
import {act, cleanup, render} from "@testing-library/react";
import DisplayLottie from "./DisplayLottie";

const mockPlay = jest.fn();
const mockPause = jest.fn();
const mockStop = jest.fn();
const mockDisconnect = jest.fn();
let mockIntersectionCallback;
const originalObserver = global.IntersectionObserver;
let media;
let mediaListeners;

jest.mock("lottie-react", () => {
  const React = require("react");
  return function MockLottie({lottieRef}) {
    React.useEffect(() => {
      lottieRef.current = {
        play: mockPlay,
        pause: mockPause,
        goToAndStop: mockStop
      };
      return () => {
        lottieRef.current = null;
      };
    }, [lottieRef]);
    return null;
  };
});

beforeEach(() => {
  mediaListeners = new Set();
  media = {
    matches: false,
    addEventListener: jest.fn((event, listener) =>
      mediaListeners.add(listener)
    ),
    removeEventListener: jest.fn((event, listener) =>
      mediaListeners.delete(listener)
    )
  };
  window.matchMedia.mockReturnValue(media);
  global.IntersectionObserver = jest.fn().mockImplementation(callback => {
    mockIntersectionCallback = callback;
    return {observe: jest.fn(), disconnect: mockDisconnect};
  });
});

afterEach(() => {
  cleanup();
  jest.restoreAllMocks();
  global.IntersectionObserver = originalObserver;
});

it("pauses offscreen/hidden animation and disconnects on unmount", () => {
  const hidden = jest.spyOn(document, "hidden", "get").mockReturnValue(false);
  const {unmount} = render(<DisplayLottie animationData={{}} />);
  expect(mockPlay).toHaveBeenCalledTimes(1);
  act(() => mockIntersectionCallback([{isIntersecting: false}]));
  expect(mockPause).toHaveBeenCalledTimes(1);
  act(() => mockIntersectionCallback([{isIntersecting: true}]));
  expect(mockPlay).toHaveBeenCalledTimes(2);
  hidden.mockReturnValue(true);
  act(() => document.dispatchEvent(new Event("visibilitychange")));
  expect(mockPause).toHaveBeenCalledTimes(2);
  unmount();
  expect(mockDisconnect).toHaveBeenCalledTimes(1);
  mockPlay.mockClear();
  hidden.mockReturnValue(false);
  document.dispatchEvent(new Event("visibilitychange"));
  expect(mockPlay).not.toHaveBeenCalled();
});

it("keeps a static frame when reduced motion is requested", () => {
  media.matches = true;
  render(<DisplayLottie animationData={{}} />);
  expect(mockStop).toHaveBeenCalledWith(0, true);
  expect(mockPlay).not.toHaveBeenCalled();
  expect(global.IntersectionObserver).not.toHaveBeenCalled();
});

it("stops an active animation when the motion preference changes", () => {
  const {unmount} = render(<DisplayLottie animationData={{}} />);
  expect(mockPlay).toHaveBeenCalledTimes(1);
  act(() => {
    media.matches = true;
    mediaListeners.forEach(listener => listener());
  });
  expect(mockStop).toHaveBeenCalledWith(0, true);
  expect(mockDisconnect).toHaveBeenCalledTimes(1);
  act(() => {
    media.matches = false;
    mediaListeners.forEach(listener => listener());
  });
  expect(mockPlay).toHaveBeenCalledTimes(2);
  unmount();
  expect(mediaListeners.size).toBe(0);
});
