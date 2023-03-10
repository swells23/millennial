import { DOMAIN, WP_API } from "../../../data/templateMeta";
import Page from "./Page";
import { PageData } from "./Page.interfaces";

const MOCK_DATA: object = { title: "mock title" };
let fetchMock: jest.SpyInstance | undefined = undefined;

describe("Page API", () => {
  const slug = "home",
    url = new URL(`${DOMAIN}/${WP_API}/pages?slug=${slug}&_fields=title`);

  describe("successful GET request to wordpress Pages api", () => {
    beforeEach(() => {
      fetchMock = jest.spyOn(global, "fetch").mockImplementation(
        jest.fn(() =>
          Promise.resolve({
            json: () => Promise.resolve(MOCK_DATA),
          })
        ) as jest.Mock
      );
    });

    afterEach(() => {
      jest.restoreAllMocks();
    });

    it("calls api w/ correct slug", async () => {
      await Page(slug);

      expect(fetchMock).toHaveBeenCalled();
      expect(fetchMock).toHaveBeenCalledWith(url);
    });

    it("returns pageData prop", async () => {
      const result: PageData | undefined = await Page(slug);

      expect(result).toEqual({
        pageData: MOCK_DATA,
      } as PageData);
    });
  });

  describe("unsuccessful GET request to wordpress Pages api", () => {
    beforeEach(() => {
      fetchMock = jest
        .spyOn(global, "fetch")
        .mockRejectedValueOnce(new Error("mock error") as Error);
    });

    afterEach(() => {
      jest.restoreAllMocks();
    });

    it("calls api w/ correct slug", async () => {
      await Page(slug);

      expect(fetchMock).toHaveBeenCalled();
      expect(fetchMock).toHaveBeenCalledWith(url);
    });

    it("returns undefined w/ console error", async () => {
      console.error = jest.fn() as jest.Mock;

      const result: PageData | undefined = await Page(slug);

      expect(result).toBe(undefined);
      expect(console.error).toHaveBeenCalled();
    });
  });
});
