import { GOOGLE_DRIVE_API } from "../../../data/templateMeta";
import GetAgents from "./GetAgents";

interface AgentData {
  agentList: JSON;
}

interface MockData {
  name: string;
}

const MOCK_DATA: MockData = { name: "mock name" };
let fetchMock: jest.SpyInstance | undefined = undefined;

describe("GetAgents API", () => {
  const url = new URL(
    `${GOOGLE_DRIVE_API}/files/${process.env.MILLENNIAL_AGENTS_ID}?key=${process.env.MILLENNIAL_API_KEY}&alt=media`
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

    it("returns agentList prop", async () => {
      const result: AgentData | undefined = await GetAgents();

      expect(fetchMock).toHaveBeenCalledWith(url);
      expect(result).toEqual({
        agentList: MOCK_DATA,
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

      const result: AgentData | undefined = await GetAgents();

      expect(fetchMock).toHaveBeenCalledWith(url);
      expect(result).toBe(undefined);
      expect(console.error).toHaveBeenCalled();
    });
  });
});