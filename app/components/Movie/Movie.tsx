/* eslint-disable @typescript-eslint/camelcase */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BounceLoader } from 'react-spinners';
import * as movieActions from '../../store/movie/actions';
import { AppState } from '../../store/index';

type Props = {
  loading: boolean;
  page: number;
  selected_category: number;
  maxPage: number | null;
  CATEGORY_FOLDER: string | null;
  movies: string[];
  startFetchingMovies: () => void;
  getMovies: (arg0: number, arg1: number) => void;
  // selectMovie: (arg0: string) => void;
};

class Movie extends Component<Props> {
  renderPagination() {
    const {
      page,
      selected_category,
      maxPage,
      startFetchingMovies,
      getMovies
    } = this.props;
    return (
      <div className="col-md-12">
        <button
          className="btn navigation-button pull-left"
          type="button"
          disabled={page === 1}
          onClick={() => {
            startFetchingMovies();
            getMovies(selected_category, page - 1);
          }}
        >
          BACK
        </button>
        <button
          className="btn navigation-button pull-right"
          type="button"
          disabled={page === maxPage}
          onClick={() => {
            startFetchingMovies();
            getMovies(selected_category, page + 1);
          }}
        >
          FORWARD
        </button>
      </div>
    );
  }

  renderMovieItem(item: string, i: number) {
    const { CATEGORY_FOLDER /* selectMovie */ } = this.props;
    return (
      <div key={i} className="col-md-3">
        <div className="movie-item">
          <img
            alt="movie"
            role="presentation"
            key={i}
            width="100"
            height="150"
            src={`${CATEGORY_FOLDER}/image/${item}`}
            onClick={() => {
              // selectMovie(
              //   `${CATEGORY_FOLDER}/video/${item.replace('jpg', 'mp4')}`
              // );
            }}
          />
          <br />
          <span className="movie-title">{item.replace('.jpg', '')}</span>
        </div>
      </div>
    );
  }

  renderMovies() {
    const { loading, movies, selected_category } = this.props;
    if (loading)
      return (
        <div className="col-md-2 col-md-offset-5">
          <BounceLoader />
        </div>
      );
    if (!movies && selected_category === null)
      return <h2 className="movies-head-message">Select a Category</h2>;
    if (!movies) return <h2 className="movies-head-message">No movies</h2>;
    return (
      <div>
        <div>{movies.map((item, i) => this.renderMovieItem(item, i))}</div>
        <div>{this.renderPagination()}</div>
      </div>
    );
  }

  render() {
    return <div>{this.renderMovies()}</div>;
  }
}

const mapStateToProps = (state: AppState) => {
  const {
    category: { selected_category },
    movie: { loading, page, maxPage, movies, CATEGORY_FOLDER }
  } = state;
  return {
    selected_category,
    loading,
    page,
    maxPage,
    movies,
    CATEGORY_FOLDER
  };
};

export default connect(mapStateToProps, movieActions)(Movie);
