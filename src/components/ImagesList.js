import React from 'react';
import { connect } from 'react-redux';
import * as list from './../actions/list';
import Layout from './ui/Layout';
import SearchPanel from './ui/SearchPanel';
import Loading from './ui/Loading';
import ImagesGrid from './ui/ImagesGrid';
import ErrorMessage from './ui/ErrorMessage';

class ImagesList extends React.Component {
  constructor() {
    super();
    this.state = {
      query: ''
    }
  }

  handleInputChange = event => {
    this.setState({
      query: event.target.value
    })
  }

  handleInputKeyDown = ({ keyCode }) => {
    if (keyCode === 13) {
      this.props.fetchList(this.state.query);
    }
  }

  handleSearch = () => {
    this.props.fetchList(this.state.query);
  }

  componentDidMount() {
    this.props.fetchList();
  }

  render() {
    const loading = this.props.loading;
    const data = this.props.data;
    const error = this.props.error || false;

    return (
      <Layout>
        <div>
          <SearchPanel
            query={this.state.query}
            handleInputChange={this.handleInputChange}
            handleInputKeyDown={this.handleInputKeyDown}
            handleSearch={this.handleSearch}
          />
          {loading &&
            <Loading />
          }
          {!error && data &&
            <ImagesGrid data={data} />
          }
          {error &&
            <ErrorMessage
              message='A network error ocurred 📡'
            />
          }
        </div>
      </Layout>
    )
  }
}

const mapStateToProps = reducers => reducers.list;

export default connect(mapStateToProps, list)(ImagesList);
