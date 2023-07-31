import { GOOGLE_DRIVE_API } from "../../../data/templateMeta";
import GetAgents from "./GetAgents";

const MOCK_DATA = { name: "mock name" };
let fetchMock: jest.SpyInstance | undefined = undefined;

describe("GetAgents API", () => {
  const url = new URL(
    `${GOOGLE_DRIVE_API}/files/${process.env.MILLENNIAL_AGENTS_ID}?key=${process.env.MILLENNIAL_API_KEY}&alt=media`
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

    it("returns agentList prop", async () => {
      const result = await GetAgents();

      expect(fetchMock).toHaveBeenCalledWith(url, cache);
      expect(result).toEqual(MOCK_DATA);
    });

    it("uses staging ID when on the staging environment", async () => {
      process.env = {
        ...originalEnv,
        NEXT_VERCEL_ENV: "preview",
      };

      const stagingUrl = new URL(
        `${GOOGLE_DRIVE_API}/files/${process.env.STAGING_MILLENNIAL_AGENTS_ID}?key=${process.env.MILLENNIAL_API_KEY}&alt=media`
      );
      const result = await GetAgents();

      expect(fetchMock).toHaveBeenCalledWith(stagingUrl, cache);
      expect(result).toEqual(MOCK_DATA);

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

      const result = await GetAgents();

      expect(fetchMock).toHaveBeenCalledWith(url, cache);
      expect(result).toBe(undefined);
      expect(console.error).toHaveBeenCalled();
    });
  });
});
