import { useState } from 'react';
import { directoryData } from '../../dummy-data/directory.data';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

const Directory = () => {
  const [sections] = useState(directoryData);

  return (
    <div className='directory-menu'>
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

export default Directory;
