import styled from 'styled-components'

export const FormContainer = styled.form`
  max-width: 583px;
  width: 100%;
  font-weight: 300;
  padding-top: 3vmax;

  div {
    h3 {
      line-height: 1.3328;
      font-weight: 300;
      font-size: calc(1 * 1rem);
    }

    section {
      display: flex;
      justify-content: space-between;
      font-size: calc(1 * 0.95rem);

      label {
        flex: 1;

        &:first-child {
          margin-right: 1rem;
        }
      }
    }

    margin-bottom: 20px;
  }

  input,
  textarea {
    width: 100%;
    padding: 12px;
    margin: 6px 0 4px;
    border: 1px solid #ccc;
    background: #fafafa;
    color: #000;
    font-size: 12px;
    border-radius: 2px;
    resize: vertical;
    cursor: default;
  }

  textarea {
    min-height: 100px;
  }
`

export const Label = styled.label`
  width: 100%;
  line-height: 1.8em;
  height: calc(auto + 1.8em);
  position: relative;
  display: block;
  margin-bottom: 0.5em;

  span {
    font-size: calc(1 * 0.95rem);
    color: red;
    display: block;
  }
`

export const Button = styled.button`
  background: #a8a6a1;
  color: #fff;
  width: 111px;
  height: 67px;
  outline: none;
  border: none;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`
