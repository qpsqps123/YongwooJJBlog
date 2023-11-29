import React, { useRef, useState } from "react";
import { useFlexSearch } from "react-use-flexsearch";
import { Formik, Form } from "formik";
import { graphql, useStaticQuery, Link } from "gatsby";
import * as classes from "./SearchBar.module.scss";

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

  const [query, setQuery] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const index = data.localSearchPages.index;
  const store = data.localSearchPages.store;

  const totalResults = useFlexSearch(query, index, store);

  const results = totalResults.filter(
    (result: SearchResults) => result.post === "life" || result.post === "learn"
  );

  const [pageNum, setPageNum] = useState<number>(1);
  const totalNumResults = results.length;
  const limit = 5;
  const startPoint = limit * (pageNum - 1);
  const endPoint = limit * pageNum;

  const currentResults = results.filter(
    (_: never, index: number) => index + 1 > startPoint && index + 1 <= endPoint
  );

  const handleNextPage = () => {
    setPageNum((prevState) => prevState + 1);
  };

  const handlePrevPage = () => {
    setPageNum((prevState) => prevState - 1);
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
    <section className={classes.searchContainer}>
      <h2 className="a11yHidden">Search</h2>
      <section>
        <h3 className="a11yHidden">Search Form</h3>
        <Formik
          initialValues={{ query: "" }}
          onSubmit={(values: FormikValues, action: any) => {
            setQuery(values.query);
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
                  ref={inputRef}
                  onChange={handleChange}
                  value={values.query}
                  autoFocus
                />
              </Form>
            );
          }}
        </Formik>
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
    </section>
  );
};

export default SearchBar;
