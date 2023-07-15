import { GOOGLE_DRIVE_API } from "../../../data/templateMeta";
import GetCarouselImages from "./GetCarouselImages";

const MOCK_FOLDER_ID = "123456";
const MOCK_DATA = { name: "mock name" };
let fetchMock: jest.SpyInstance | undefined = undefined;

describe("GetCarouselImages API", () => {
  const url = new URL(
    `${GOOGLE_DRIVE_API}/files?q='${MOCK_FOLDER_ID}'+in+parents&orderBy=name&key=${process.env.MILLENNIAL_API_KEY}`
  );

  describe("successful GET request to google drive api", () => {
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

    it("returns carouselImageList prop", async () => {
      const result = await GetCarouselImages(MOCK_FOLDER_ID);

      expect(fetchMock).toHaveBeenCalledWith(url);
      expect(result).toEqual(MOCK_DATA);
    });
  });

  describe("unsuccessful GET request to google drive api", () => {
    beforeEach(() => {
      fetchMock = jest
        .spyOn(global, "fetch")
        .mockRejectedValueOnce(new Error("mock error") as Error);
    });

    afterEach(() => {
      jest.restoreAllMocks();
    });

    it("returns undefined w/ console error", async () => {
      console.error = jest.fn() as jest.Mock;

      const result = await GetCarouselImages(MOCK_FOLDER_ID);

      expect(fetchMock).toHaveBeenCalledWith(url);
      expect(result).toBe(undefined);
      expect(console.error).toHaveBeenCalled();
    });
  });
});
