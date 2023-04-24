import { GOOGLE_DRIVE_API } from "../../../data/templateMeta";
import GetCarouselImages from "./GetCarouselImages";

interface ImageData {
  carouselImageList: JSON;
}

interface MockData {
  name: string;
}

const MOCK_DATA: MockData = { name: "mock name" };
let fetchMock: jest.SpyInstance | undefined = undefined;

describe("GetCarouselImages API", () => {
  const url = new URL(
    `${GOOGLE_DRIVE_API}/files?q='${process.env.MILLENNIAL_CAROUSEL_IMAGES_ID}'+in+parents&orderBy=name&key=${process.env.MILLENNIAL_API_KEY}`
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
      const result: ImageData | undefined = await GetCarouselImages();

      expect(fetchMock).toHaveBeenCalledWith(url);
      expect(result).toEqual({
        carouselImageList: MOCK_DATA,
      });
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

      const result: ImageData | undefined = await GetCarouselImages();

      expect(fetchMock).toHaveBeenCalledWith(url);
      expect(result).toBe(undefined);
      expect(console.error).toHaveBeenCalled();
    });
  });
});
