import PropTypes from "prop-types";
import css from 'components/Statistics/Statistics.module.css';

export default function Statistics({ stats, title }) {
    return (
        <section className={css.statistics} >
            {title && <h2 className={css.title}>{title}</h2>}
            <ul className={css.stat_list}>
             {stats.map(({ id, label, percentage }) => (
                 <li className={css.item} key={id}>
                     <span className={css.label}>{label}</span>
                     <span className={css.percentage}>{percentage}</span>
              </li>
                  ))}
              </ul>
    </section>);
}

Statistics.propTypes = {
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    ),
};