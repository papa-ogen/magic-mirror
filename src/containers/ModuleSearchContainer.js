import React from 'react';
import Search from '../components/mirror/ModuleSearch';
import { getModules, fakeRequest } from '../data/utils';

class SearchModuleContainer extends React.Component {
  constructor(props) {
     super(props);
     this.state = {
       module: {title: ''},
       modules: getModules(),
       autoCompleteValue: ''
     };
   }

  onSelect(value, item){
    this.setState({ autoCompleteValue: value, module: item });
  }

  onChange(event, value) {
      this.setState({ value, loading: true });
      fakeRequest(value, (items) => {
        this.setState({ modules: items, loading: false });
      });
  }

   render () {
     return (
       <Search
            autoCompleteValue={this.state.autoCompleteValue}
            modules={this.state.modules}
            handleSelect={this.onSelect.bind(this)}
            handleChange={this.onChange.bind(this)}/>
     );
   }
}

export default SearchModuleContainer;
