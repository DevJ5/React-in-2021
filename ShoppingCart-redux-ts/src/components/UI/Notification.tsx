import classes from './Notification.module.css';

type NotificationProps = {
  status: string;
  title: string;
  message: string;
};

const Notification = (props: NotificationProps) => {
  let specialClasses = '';

  if (props.status === 'error') {
    specialClasses = classes.error;
  }
  if (props.status === 'success') {
    specialClasses = classes.success;
  }

  // CSS module in dynamic styling:
  const cssClasses = `${classes.notification} ${specialClasses}`;

  return (
    <section className={cssClasses}>
      <h2>{props.title}</h2>
      <p>{props.message}</p>
    </section>
  );
};

export default Notification;
