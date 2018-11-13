import React from 'react';

import Layout from './../layouts/Layout';
import { List as ListLoader } from 'react-content-loader';
import Emoji from '../components/Emoji';

export default class ResumePage extends React.Component {

  render() {
    let resumeGoogleDoc = 'https://docs.google.com/document/d/1oVbp1YblW_0vtzTRcFvbKOEOGwT_q5j8xmsPBacCQGg/export?format=pdf&attachment=false';
    return (
    <Layout pageHead={<span>Resumé <Emoji symbol='💼' /></span>}>
        <ListLoader className="w-full absolute" />

        <object className="w-full z-10" style={{height: '100vh'}} data={resumeGoogleDoc} type="application/pdf">
          Download my resume <a href={resumeGoogleDoc}>Seyi Adekoya.pdf</a>
        </object>

      </Layout>
    )
  }
}