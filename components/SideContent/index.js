import React from 'react';
import styles from './SideContent.scss';
import { SidecarArticlePreview } from '../ArticlePreview';

export class SideContent extends React.Component {
    render() {

        return (
            <section className={styles['side-content']} aria-label="Sekce Venku zase prší">
                <h3 className={styles['text--no-margin']}>Venku zase prší</h3>

                <SidecarArticlePreview
                    title={this.props.data[0].title}
                    excerpt={this.props.data[0].body}
                    link={this.props.data[0].slug.current}
                    markRead={false}
                />

                <SidecarArticlePreview
                    title={this.props.data[1].title}
                    excerpt={this.props.data[1].body}
                    link={this.props.data[1].slug.current}
                    markRead={false}
                />

                <SidecarArticlePreview
                    title={this.props.data[2].title}
                    excerpt={this.props.data[2].body}
                    link={this.props.data[2].slug.current}
                    markRead={false}
                />

                <SidecarArticlePreview
                    title={this.props.data[3].title}
                    excerpt={this.props.data[3].body}
                    link={this.props.data[3].slug.current}
                    markRead={false}
                />
            </section>
        );
    }
}

export default SideContent;
