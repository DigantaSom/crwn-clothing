import { useState } from 'react';
import { directoryData } from '../../dummy-data/directory.data';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

const Directory = () => {
  const [sections] = useState(directoryData);

  return (
    <div className='directory-menu'>
      {sections.map(({ id, title, imageUrl, size }) => (
        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
      ))}
    </div>
  );
};

export default Directory;
