import {fireEvent, render, screen} from '@testing-library/react'

import { describe, expect, vi } from "vitest";
import CustomerRow from './CustomerRow';

describe("testing <CustomerRow/> by mocking dependency", () => {
    let mockCustomer = {
        "id": 62,
        "firstName": "Harry",
        "lastName": "Potter"
    }

    const deleteMock = vi.fn();
    it("Render <CustomerRow />", () => {
        render(<CustomerRow 
                      delEvent={(id) => deleteMock(id)}
                      customer={mockCustomer}/>)

        let txt = screen.queryByText(/Harry/);
        screen.debug();
        expect(txt).toBeTruthy();
    });

    it("delete event in  <CustomerRow />", () => {
        render(<CustomerRow 
                      delEvent={(id) => deleteMock(id)}
                      customer={mockCustomer}/>)
        let btn = screen.queryByRole('button');
        fireEvent.click(btn);
        expect(deleteMock).toBeCalledTimes(1);

        expect(deleteMock).toBeCalledWith(62);
    });
})