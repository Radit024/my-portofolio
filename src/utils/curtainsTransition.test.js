import {curtains, wipe, iris} from "./curtainsTransition";

describe("curtainsTransition (Motion Curtains Mixed Effects)", () => {
  it("creates wipe effect with correct properties", () => {
    const wipeEffect = wipe({direction: "right"});
    expect(wipeEffect.type).toBe("wipe");
    expect(typeof wipeEffect.cover).toBe("function");
  });

  it("creates iris effect with correct properties", () => {
    const irisEffect = iris({origin: {x: 0.5, y: 0.5}});
    expect(irisEffect.type).toBe("iris");
    expect(typeof irisEffect.reveal).toBe("function");
  });

  it("immediately executes update callback in test environment", async () => {
    let called = false;
    await curtains(() => {
      called = true;
    });
    expect(called).toBe(true);
  });

  it("handles empty or non-function callback without throwing", async () => {
    await expect(curtains(null)).resolves.not.toThrow();
  });
});
