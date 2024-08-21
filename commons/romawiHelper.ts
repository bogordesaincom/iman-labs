import dayjs from "dayjs";

const getRomawiNumber = (monthName: number) => {
    const romawiNumber = [
        { month: 1, name: "I" },
        { month: 2, name: "II" },
        { month: 3, name: "III" },
        { month: 4, name: "IV" },
        { month: 5, name: "V" },
        { month: 6, name: "VI" },
        { month: 7, name: "VII" },
        { month: 8, name: "VIII" },
        { month: 9, name: "IX" },
        { month: 10, name: "X" },
        { month: 11, name: "XI" },
        { month: 12, name: "XII" },
    ];
    const slectRomawi = romawiNumber.find((item) => item.month == monthName);

    return slectRomawi;
};

const getRomawiAlpha = (monthName: number) => {
    const romawiNumber = [
        { month: 1, name: "I" },
        { month: 2, name: "II" },
        { month: 3, name: "III" },
        { month: 4, name: "IV" },
        { month: 5, name: "V" },
        { month: 6, name: "VI" },
        { month: 7, name: "VII" },
        { month: 8, name: "VIII" },
        { month: 9, name: "IX" },
        { month: 10, name: "X" },
        { month: 11, name: "XI" },
        { month: 12, name: "XII" },
    ];
    const slectRomawi = romawiNumber.find((item) => item.month == monthName);

    if (slectRomawi) {
        return slectRomawi.name;
    }
};

const invoiceRomawiNumber = (
    prefix: string,
    count: number,
    padnumber: number,
    space_type: string,
) => {
    const invoiceNumber = Number(count) + Number(1);
    const stringNumber = Number(invoiceNumber).toString();
    const finalNumber = stringNumber.padStart(padnumber, "0");

    const nowDate = new Date();
    const monthNumber = dayjs(nowDate).format("M");
    const yearNumber = dayjs(nowDate).format("YYYY");

    const slectRomawi = getRomawiAlpha(Number(monthNumber));

    const invoiceFinal = `${prefix}${space_type}${finalNumber}${space_type}${slectRomawi}${space_type}${yearNumber}`;

    return invoiceFinal;
};

export { getRomawiNumber, invoiceRomawiNumber };
