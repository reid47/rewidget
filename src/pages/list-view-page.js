import React from 'react';
import ListView from '../components/listview/ListView';
import withKeyHandlers from '../components/KeyHandler'

const Button = ({children, ...props}) => <button {...props}>{children}</button>;
const WrappedButton = withKeyHandlers(Button);

const ListViewPage = () => {
  return (
    <div className="page">
      <ListView {...{
        multiselect: false,
        onChange: (newValue) => console.log('select selection: ' + newValue),
        displayItem: (item) => item.name,
        getValueFromItem: (item) => item.value,
        data: Array.from(Array(10)).map((_, i) => {
          return {
            name: `Item ${i}`,
            value: i
          }
        })
      }}/>
      <br/>
      <a href="#">test...</a>
      <WrappedButton
        onArrowUp={() => console.log('arrow up 2')}
        onArrowDown={() => console.log('arrow down 2')}
        onSpace={() => console.log('space 2!')}
        >click me</WrappedButton>
      <br/><br/>
      <ListView {...{
        multiselect: true,
        onChange: (newValue) => console.log('multiselect selection: ' + newValue),
        displayItem: (item) => item.name,
        getValueFromItem: (item) => item.value,
        data: Array.from(Array(10)).map((_, i) => {
          return {
            name: `Multiselect Item ${i}`,
            value: i
          }
        })
      }}/>
    </div>
  );
}

export default ListViewPage;
