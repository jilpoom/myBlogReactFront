import './App.css';
import Layout from './pages/layout'
import LeftTopics from './pages/leftTopics';


function App() {
  const topicList = [1,2,3,4,5]
  
  
  return (
      <Layout>
        <LeftTopics topicList={topicList}/>
      </Layout>
  );
};

export default App;
