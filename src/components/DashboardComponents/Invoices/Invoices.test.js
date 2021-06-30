import React from "react";
import { render, screen, within } from "@testing-library/react";
import Invoices from './Invoices';
import { invoicesData } from '../../../assets/data/data';

it("should render list of invoices", () => {
    let itemsCount = invoicesData.length;
    
    render(<Invoices />);

    const list = screen.getByRole("invoices");

    const { getAllByRole } = within(list)
    const items = getAllByRole("invoice-item");

    expect(items.length).toBe(itemsCount);
});