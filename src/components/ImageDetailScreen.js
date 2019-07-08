import React from 'react';
import { connect } from 'react-redux';
import * as detail from '../actions/detail';

import Layout from './ui/Layout';
import Loading from './ui/Loading';
import ImageExpanded from './ui/ImageExpanded';
import ImageSlider from './ui/ImageSlider';
import ErrorMessage from './ui/ErrorMessage';

class ImageDetail extends React.Component {
  componentDidMount() {
    const route_params = this.props.match.params;
    this.props.fetchDetailAndRelated(route_params.id);
  }

  componentDidUpdate(prevProps) {
    const route_params = this.props.match.params;
    if (prevProps.match.params.id !== route_params.id) {
      this.props.fetchDetailAndRelated(route_params.id);
    }
  }

  render() {
    const {
      loadingData,
      data,
      loadingRelated,
      related,
      errorData
    } = this.props;

    return (
      <Layout>
        <div>
          {loadingData &&
            <Loading />
          }
          {data &&
            <ImageExpanded
              data={data.data}
            />
          }
          {loadingRelated &&
            <Loading />
          }
          {related &&
            <div>
              <h3>See other popular images</h3>
              <ImageSlider related={related}/>
            </div>
          }
          {errorData &&
            <ErrorMessage
              message='A network error ocurred 📡'
            />
          }
        </div>
      </Layout>
    )
  }
}

const mapStateToProps = reducers => reducers.detail;

export default connect(mapStateToProps, detail)(ImageDetail);
