import { useDoc } from '@docusaurus/plugin-content-docs/client';
// import TagsListInline from '@docusaurus/theme-classic/src/theme/TagsListInline';
import React, { type ReactNode } from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import Tag from '@theme/Tag';
import styles from '@docusaurus/theme-classic/src/theme/TagsListInline/styles.module.css';

export default function TagsListInline(): ReactNode {
  const { metadata } = useDoc();
  const { tags } = metadata;
  return (
    <>
      <b>
        <Translate
          id="theme.tags.tagsListLabel"
          description="The label alongside a tag list">
          Tags:
        </Translate>
      </b>
      <ul className={clsx(styles.tags, 'padding--none', 'margin-left--sm')}>
        {tags.map((tag) => (
          <li key={tag.permalink} className={styles.tag}>
            <Tag {...tag} />
          </li>
        ))}
      </ul>
    </>
  );
}