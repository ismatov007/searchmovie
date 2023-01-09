import './App.css';


// import Components from './1Componentlar/Component';
// import UnversalFuntion from './1Componentlar/UnversalFunc';
// import ComDidmount from './1Componentlar/Didmount';
// import UpdateLoader from './1Componentlar/Update';
// import Amaliyot from './1Componentlar/Amaliyot';
// import KeyAtributs from './3KeyAtributs/KeyAtributWorks';
// import Form from './2Validatsiyalar/Forms';
// import Formamalyot from './2Validatsiyalar/Amaliyot';
// import CreateRef from './4CreateRef/CreateRef';

import Header from './Module_3/Header';
import Main from './Module_3/Main';
import Footer from './Module_3/Footer';


function App() {

  return (
    <div className="App">
     {/* <Components/> */}
     {/* <UnversalFuntion /> */}
     {/* <ComDidmount/> */}
     {/* <UpdateLoader/> */}
     {/* <Amaliyot/> */}
     {/* <KeyAtributs /> */}
     {/* <Form/> */}
     {/* <Formamalyot/> */}
    {/* <CreateRef/> */}


      {/*Bundan pasti kino prekti uchun */}
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
