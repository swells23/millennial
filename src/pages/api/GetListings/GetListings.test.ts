import { GOOGLE_DRIVE_API } from "../../../data/templateMeta";
import GetListings from "./GetListings";

const MOCK_DATA = {
  files: [
    { id: "mock id 1", name: "mock name 1" },
    { id: "mock id 2", name: "mock name 2" },
  ],
};
let fetchMock: jest.SpyInstance | undefined = undefined;

describe("GetListings API", () => {
  const url = new URL(
    `${GOOGLE_DRIVE_API}/files?q='${process.env.MILLENNIAL_LISTINGS_ID}'+in+parents&orderBy=name&key=${process.env.MILLENNIAL_API_KEY}`
  );
  const cache = { cache: "no-store" };
  const originalEnv = process.env;

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

    it("props return data when listing folders are created", async () => {
      const result = await GetListings();

      expect(fetchMock).toHaveBeenCalledWith(url, cache);
      expect(result).toEqual({
        drive: [
          expect.objectContaining({
            id: MOCK_DATA.files[0].id,
            name: MOCK_DATA.files[0].name,
          }),
          expect.objectContaining({
            id: MOCK_DATA.files[1].id,
            name: MOCK_DATA.files[1].name,
          }),
        ],
        addressList: [
          expect.objectContaining({
            query: MOCK_DATA.files[0].name,
            response: expect.any(Object),
          }),
          expect.objectContaining({
            query: MOCK_DATA.files[1].name,
            response: expect.any(Object),
          }),
        ],
      });
    });

    it("props return empty arrays when their are no listing folders", async () => {
      fetchMock = jest.spyOn(global, "fetch").mockImplementation(
        jest.fn(() =>
          Promise.resolve({
            json: () => Promise.resolve({ files: [] }),
          })
        ) as jest.Mock
      );

      const result = await GetListings();

      expect(fetchMock).toHaveBeenCalledWith(url, cache);
      expect(result).toEqual({
        drive: [],
        addressList: [],
      });
    });

    it("uses staging ID when on the staging environment", async () => {
      process.env = {
        ...originalEnv,
        NEXT_VERCEL_ENV: "preview",
      };

      const stagingUrl = new URL(
        `${GOOGLE_DRIVE_API}/files?q='${process.env.STAGING_MILLENNIAL_LISTINGS_ID}'+in+parents&orderBy=name&key=${process.env.MILLENNIAL_API_KEY}`
      );
      const result = await GetListings();

      expect(fetchMock).toHaveBeenCalledWith(stagingUrl, cache);
      expect(result).toEqual({
        drive: [
          expect.objectContaining({
            id: MOCK_DATA.files[0].id,
            name: MOCK_DATA.files[0].name,
          }),
          expect.objectContaining({
            id: MOCK_DATA.files[1].id,
            name: MOCK_DATA.files[1].name,
          }),
        ],
        addressList: [
          expect.objectContaining({
            query: MOCK_DATA.files[0].name,
            response: expect.any(Object),
          }),
          expect.objectContaining({
            query: MOCK_DATA.files[1].name,
            response: expect.any(Object),
          }),
        ],
      });

      process.env = originalEnv;
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

      const result = await GetListings();

      expect(fetchMock).toHaveBeenCalledWith(url, cache);
      expect(result).toBe(undefined);
      expect(console.error).toHaveBeenCalled();
    });
  });
});
