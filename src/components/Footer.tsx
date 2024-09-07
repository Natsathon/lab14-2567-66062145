export const Footer = (props: {
  year: string;
  fullName: string;
  studentId: string;
}) => {
  return (
    <p>Copyright © {props.year} {props.fullName} {props.studentId}</p>
  );
}