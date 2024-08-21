const capitalFirst = (stringCome: string) => {
    const stringValue =
        stringCome.charAt(0).toUpperCase() + stringCome.slice(1);
    return stringValue;
};

export { capitalFirst };
