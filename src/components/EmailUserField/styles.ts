import styled from 'styled-components'

export const Error = styled.div`
  clear: both;
  background: #ce2c30;
  color: #fff;
  font-size: 12px;
  font-weight: 400;
  line-height: 22px;
  margin-left: -22px;
  margin-right: -22px;
  margin-top: 11px;
  padding: 11px 22px;
`

export const Span = styled.span`
  font-weight: 300;
  word-wrap: break-word;
  color: #767676;
  font-size: 12px;
  line-height: 16px;
`

export const SpanExtended = styled(Span)`
  position: absolute;
  top: 25px;
  right: 22px;
  cursor: pointer;
`
