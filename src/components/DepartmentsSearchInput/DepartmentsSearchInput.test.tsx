import { describe, it, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import { DepartmentsSearchInput } from "./DepartmentsSearchInput";
import { SearchDepartments } from "../../hooks/useDepartments";

const searchDepartments = vi.spyOn(
  {
    searchDepartments: async () => {},
  },
  "searchDepartments"
) as unknown as SearchDepartments;

describe("DepartmentsSearchInput", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });
  //!===========================================================================

  it("runs search after enough time delay", () => {
    render(<DepartmentsSearchInput searchDepartments={searchDepartments} />);

    vi.advanceTimersByTime(2000);
    expect(searchDepartments).toBeCalled();
  });
  //!===========================================================================

  it("doesn't run search if not enough time is past", () => {
    render(<DepartmentsSearchInput searchDepartments={searchDepartments} />);

    vi.advanceTimersByTime(20);
    expect(searchDepartments).not.toBeCalled();
  });
  //!===========================================================================

  it("runs search with correct inputed value", () => {
    const utils = render(
      <DepartmentsSearchInput searchDepartments={searchDepartments} />
    );

    const input = utils.getByLabelText("search-input") as HTMLInputElement;

    fireEvent.change(input, { target: { value: "department x-" } });

    expect(input.value).toBe("department x-");

    vi.advanceTimersByTime(2000);
    expect(searchDepartments).toBeCalledWith("department x-");
  });
  //!===========================================================================
});
