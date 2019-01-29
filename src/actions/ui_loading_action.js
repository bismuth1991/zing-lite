export const ROOT_PAGE_LOADING = 'ROOT_PAGE_LOADING';
export const ROOT_PAGE_LOADING_DONE = 'ROOT_PAGE_LOADING_DONE';

export const rootPageLoading = () => ({
  type: ROOT_PAGE_LOADING,
});

export const rootPageLoadingDone = () => ({
  type: ROOT_PAGE_LOADING_DONE,
});
