import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { mdx } from '@mdx-js/react';
export default ({ children, live }: { children: any; live: boolean }) => {
  if (live) {
    return (
      <div style={{ marginTop: '40px' }}>
        <LiveProvider
          code={children.trim()}
          transformCode={code => '/** @jsx mdx */ \n' + code}
          scope={{ mdx }}>
          <LiveEditor />
          <LiveError />
          <LivePreview />
        </LiveProvider>
      </div>
    );
  }

  return (
    <Highlight
      {...defaultProps}
      theme={theme}
      code={children}
      language="javascript">
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, padding: '20px' }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

var theme = {
  plain: {
    color: '#393A34',
    backgroundColor: 'transparent',
  },
  styles: [
    {
      types: ['comment', 'prolog', 'doctype', 'cdata'],
      style: {
        color: '#999988',
        fontStyle: 'italic' as any,
      },
    },
    {
      types: ['namespace'],
      style: {
        opacity: 0.7,
      },
    },
    {
      types: ['string', 'attr-value'],
      style: {
        color: '#e3116c',
      },
    },
    {
      types: ['punctuation', 'operator'],
      style: {
        color: '#393A34',
      },
    },
    {
      types: [
        'entity',
        'url',
        'symbol',
        'number',
        'boolean',
        'variable',
        'constant',
        'property',
        'regex',
        'inserted',
      ],
      style: {
        color: '#36acaa',
      },
    },
    {
      types: ['atrule', 'keyword', 'attr-name', 'selector'],
      style: {
        color: '#00a4db',
      },
    },
    {
      types: ['function', 'deleted', 'tag'],
      style: {
        color: '#d73a49',
      },
    },
    {
      types: ['function-variable'],
      style: {
        color: '#6f42c1',
      },
    },
    {
      types: ['tag', 'selector', 'keyword'],
      style: {
        color: '#00009f',
      },
    },
  ],
};
