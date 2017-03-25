import React from 'react';
import {IconSearch}  from '../icons';
import Autocomplete from 'react-autocomplete';

class ModuleSearch extends React.Component {
  handleRenderItem(item, isHighlighted){
    const listStyles = {
      item: {
        padding: '2px 6px',
        cursor: 'default'
      },

      highlightedItem: {
        color: 'white',
        background: '#F38B72',
        padding: '2px 6px',
        cursor: 'default'
      }
    };

    return (
      <div className="module-search-list-wrapper">
        style={isHighlighted ? listStyles.highlightedItem : listStyles.item}
        key={item.id}
        id={item.id}
      >{item.title}</div>
    );
  }

  render() {
    return (
      <section className="row bg-lightest-blue module-search">
        <div className="col-xs-12 col-md-6">
          <div className="box">
            <div className="form-field-wrapper">
            <Autocomplete
             ref="autocomplete"
             inputProps={{title: "Title"}}
             value={this.props.autoCompleteValue}
             items={this.props.modules}
             getItemValue={(item) => item.title}
             onSelect={this.props.onSelect}
             onChange={this.props.onChange}
             renderItem={this.handleRenderItem.bind(this)}
           />
              <IconSearch />
            </div>
          </div>
        </div>
      </section>
     );
   }
}

ModuleSearch.propTypes = {

};

export default ModuleSearch;
