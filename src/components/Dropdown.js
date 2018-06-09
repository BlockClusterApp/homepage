import React from 'react';
import Dropdown from 'react-dropdown';
import { injectGlobal } from 'styled-components';
import { mix, shade, lighten } from 'polished';
import { colors } from '../styles';

const chevronDown = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path fill="#2d5f76" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z" />
  </svg>
`;

// eslint-disable-next-line
injectGlobal`
  .Dropdown-root {
      cursor: pointer;
      position: relative;
      width: 100%;
      font-size: 17px;
      line-height: normal;
      background: #eef5fb;
      border: 1px solid #eef5fb;
      border-radius: 3px;
      padding: 8px 16px;
      transition: all 0.3s;
      color: ${colors.text};

      &:hover {
        background: #f6fbff;
        border-color: ${shade(0.95, '#eef5fb')};
      }

      &.is-open {
        background: #fff;
        border-color: ${colors.primary};
      }
    }

    .Dropdown-placeholder {
      color: ${lighten(0.3, mix(0.8, colors.text, colors.primary))};

      &.is-selected {
        color: ${colors.text};
      }
    }

    .Dropdown-menu {
      box-sizing: content-box;
      position: absolute;
      overflow: hidden;
      top: 42px;
      left: -1px;
      width: 100%;
      z-index: 4;
      border: 1px solid #e5e7e8;
      border-radius: 3px;
      box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, .08);
    }

    .Dropdown-option {
      cursor: pointer;
      padding: 8px 16px;
      background: #fff;
      color: ${lighten(0.2, mix(0.8, colors.text, colors.primary))};
      transition: all .2s;

      &:hover {
        background: #eef5fb;
        color: ${mix(0.7, colors.text, colors.primary)};
      }
    }

    .Dropdown-arrow {
      position: absolute;
      right: 0;
      top: 0;
      width: 38px;
      height: 38px;
      background-image: url('data:image/svg+xml;utf8,${chevronDown}');
      background-repeat: no-repeat;
      background-size: 13px;
      background-position: center;
    }
  `;

// eslint-disable-next-line react/prop-types
export default ({ onChange, id, name, ...props }) => (
  <Dropdown
    id={id}
    name={name}
    onChange={({ value }) =>
      onChange({
        persist: () => null,
        target: {
          type: 'select',
          id,
          name,
          value,
        },
      })
    }
    {...props}
  />
);
