const getPagination = (page: number, size: number) => {
    const limit = size ? +Number(size) : 10;

    let offset = page ? Number(page) * limit : 0;
    if (Number(page) > 0) {
        offset = (Number(page) - Number(1)) * limit;
    }

    return { limit, offset };
};

const getPagingData = (
    models: any,
    page: number,
    limit: number,
    counter: number,
) => {
    const total = Number(counter);
    const currentPage = page ? +Number(page) : 1;
    const currentPageFront = page ? +Number(page) : Number(1);
    const totalPages = Math.ceil(total / limit);
    const totalPagesFront = Math.ceil(total / limit - Number(0));

    const pagination = {
        total,
        totalPages,
        totalPagesFront,
        currentPage,
        currentPageFront,
    };
    return {
        data: models,
        pagination,
    };
};

const getAllData = (models: any, counter: any) => {
    const total = Number(counter.count);

    return {
        data: models,
        total,
    };
};

const getPagingDataApi = (
    models: any,
    page: number,
    limit: number,
    counter: any,
) => {
    const total = Number(counter);
    const current_page = page ? +Number(page) + Number(1) : Number(1);
    const total_pages = Math.ceil(total / limit - Number(0));
    const pagination = { total, total_pages, current_page };
    return {
        data: models,
        pagination,
    };
};

export { getPagination, getPagingData, getAllData, getPagingDataApi };
