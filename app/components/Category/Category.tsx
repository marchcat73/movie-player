/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BounceLoader } from 'react-spinners';
import * as categoryActions from '../../store/category/actions';
import { AppState } from '../../store/index';

type Props = {
  startFetchingCategories: () => void;
  getCategories: () => void;
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
    const { loading, categories } = this.props;
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
            <div onClick={() => alert(item)} role="menuitem" tabIndex={-1}>
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
  return {
    categories: state.category.categories,
    loading: state.category.loading
  };
};

export default connect(mapStateToProps, { ...categoryActions })(Category);
