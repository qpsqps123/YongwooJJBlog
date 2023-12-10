import React, { useContext } from "react";
import { useFlexSearch } from "react-use-flexsearch";
import { Formik, Form } from "formik";
import { graphql, useStaticQuery, Link } from "gatsby";
import * as classes from "./SearchBar.module.scss";
import { StaticImage } from "gatsby-plugin-image";
import searchSlice from "../store/search-slice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { RefContext } from "../context/refContext";

interface FormikValues {
  query: string;
}

interface SearchResults {
  id: string;
  title: string;
  post: string;
  slug: string;
  body: string;
  excerpt: string;
}

const SearchBar = () => {
  const data = useStaticQuery(graphql`
    query {
      localSearchPages {
        index
        store
      }
    }
  `);

  const useAppDispatch = useDispatch<AppDispatch>();
  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

  const query = useAppSelector((state) => state.search.query);
  const pageNum = useAppSelector((state) => state.search.pageNum);

  const { searchVisibilityRef, searchInputRef, closeSearchButtonRef } =
    useContext(RefContext);

  const index = data.localSearchPages.index;
  const store = data.localSearchPages.store;

  const totalResults = useFlexSearch(query, index, store);

  const results = totalResults.filter(
    (result: SearchResults) => result.post === "life" || result.post === "learn"
  );

  const totalNumResults = results.length;
  const limit = 5;
  const startPoint = limit * (pageNum - 1);
  const endPoint = limit * pageNum;

  const currentResults = results.filter(
    (_: never, index: number) => index + 1 > startPoint && index + 1 <= endPoint
  );

  const handleNextPage = () => {
    useAppDispatch(searchSlice.actions.toNextPage);
  };

  const handlePrevPage = () => {
    useAppDispatch(searchSlice.actions.toPrevPage);
  };

  const currentTotalNumResults = currentResults.length;
  const hasCurrentResults = currentTotalNumResults !== 0;

  const renderCurrentResults = hasCurrentResults ? (
    currentResults.map((result: SearchResults) => (
      <li key={result.id}>
        <article>
          <header>
            <h4>
              <Link
                to={`/blog/${result.post}/${result.slug}`}
                className={classes.linkToPost}
              >
                {result.title}
              </Link>
            </h4>
          </header>
          <section>
            <p className={classes.resultExcerpt}>{result.excerpt}</p>
          </section>
        </article>
      </li>
    ))
  ) : (
    <p className={classes.noResultText}>No result!</p>
  );

  const renderPrevButton =
    hasCurrentResults && startPoint > 0 ? (
      <button
        type="button"
        onClick={handlePrevPage}
        className={classes.pageNavButton}
        aria-label="Back to the previous results page."
      >
        {"<"}
      </button>
    ) : (
      <button
        type="button"
        className={classes.pageNavButton}
        aria-label="Back to the previous results page"
        disabled
      >
        {"<"}
      </button>
    );

  const renderNextButton =
    hasCurrentResults && endPoint < totalNumResults ? (
      <button
        type="button"
        onClick={handleNextPage}
        className={classes.pageNavButton}
        aria-label="Go to the next results page"
      >
        {">"}
      </button>
    ) : (
      <button
        type="button"
        className={classes.pageNavButton}
        aria-label="Go to the next results page"
        disabled
      >
        {">"}
      </button>
    );

  const renderCurrentPageNum = hasCurrentResults && (
    <span aria-label="Current page number">{pageNum}</span>
  );

  return (
    <div className={`${"hide"}`} ref={searchVisibilityRef}>
      <search className={classes.searchContainer}>
        <h2 className="a11yHidden">Search</h2>
        <section className={classes.searchFormContainer}>
          <h3 className="a11yHidden">Search Form</h3>
          <Formik
            initialValues={{ query: "" }}
            onSubmit={(values: FormikValues, action: any) => {
              useAppDispatch(searchSlice.actions.setQuery(values.query));
              action.setSubmitting(false);
            }}
          >
            {(props: any) => {
              const { values, handleChange } = props;
              return (
                <Form>
                  <label htmlFor="queryId" className="a11yHidden">
                    Type keywords. Then, Press Enter to search.
                  </label>
                  <input
                    id="queryId"
                    name="query"
                    className={classes.input}
                    placeholder="Press Enter to search"
                    ref={searchInputRef}
                    onChange={handleChange}
                    value={values.query}
                  />
                </Form>
              );
            }}
          </Formik>
          <button
            type="button"
            ref={closeSearchButtonRef}
            className={classes.closeSearchButton}
            onClick={() => {
              searchVisibilityRef?.current?.classList.toggle("hide");
            }}
            aria-label="검색창 닫기"
          >
            <StaticImage
              src="../images/icon/close.png"
              alt="닫기 아이콘"
              width={25}
              height={25}
            />
          </button>
        </section>
        <section className={classes.resultsContainer}>
          <h3>Results</h3>
          <ul className={classes.resultList} aria-label="search results">
            {renderCurrentResults}
          </ul>
          <nav className={classes.resultPageNavContainer}>
            {renderPrevButton}
            {renderCurrentPageNum}
            {renderNextButton}
          </nav>
        </section>
      </search>
    </div>
  );
};

export default SearchBar;
