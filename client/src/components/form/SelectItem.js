import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

const SelectItem = ({ task, users, onSelectChange, selectName, isAdmin }) => (
  <FormControl>
    <InputLabel htmlFor={selectName}>{selectName}</InputLabel>
    <Select
      id={selectName}
      value={task.performerId ? task.performerId : ''}
      onChange={onSelectChange}
      style={{ minWidth: '200px', marginBottom: '20px' }}
      disabled={!isAdmin}>
      <MenuItem value="">
        <em>Noone</em>
      </MenuItem>
      {users
        ? users.map(
            user =>
              !user.isAdmin ? (
                <MenuItem key={user._id} value={user._id}>
                  {user.login}
                </MenuItem>
              ) : null,
          )
        : null}
    </Select>
  </FormControl>
);

export default SelectItem;
