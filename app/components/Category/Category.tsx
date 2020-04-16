import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BounceLoader } from 'react-spinners';
import * as categoryActions from '../../store/category/actions';
import * as movieActions from '../../store/movie/actions';
import { AppState } from '../../store/index';
import styles from './Category.css';

type Props = {
  startFetchingCategories: () => void;
  getCategories: () => void;
  selectCategory: (arg0: number) => void;
  startFetchingMovies: () => void;
  getMovies: (arg0: number, arg1: number) => void;
  loading: boolean;
  categories: string[] | null;
};

class Category extends Component<Props> {
  componentDidMount() {
    const { startFetchingCategories, getCategories } = this.props;
    startFetchingCategories();
    getCategories();
  }

  renderCategories() {
    const {
      loading,
      categories,
      selectCategory,
      startFetchingMovies,
      getMovies
    } = this.props;
    if (loading || !categories)
      return (
        <div>
          <BounceLoader />
        </div>
      );

    return (
      <div>
        <div>
          <h2>Categories</h2>
          <hr />
        </div>
        {categories.map((item, i) => (
          <div key={`${i + item}`}>
            <div
              className={styles.menuItem}
              onClick={() => {
                selectCategory(i);
                startFetchingMovies();
                getMovies(i, 1);
              }}
              role="presentation"
            >
              {item}
            </div>
          </div>
        ))}
      </div>
    );
  }

  render() {
    return <div>{this.renderCategories()}</div>;
  }
}

const mapStateToProps = (state: AppState) => {
  const {
    category: { categories, loading }
  } = state;
  return {
    categories,
    loading
  };
};

export default connect(mapStateToProps, {
  ...categoryActions,
  ...movieActions
})(Category);
