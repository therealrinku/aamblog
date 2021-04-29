import createPageStyles from "../styles/create.module.css";

const Create = () => {
  return (
    <div className={createPageStyles.createPage}>
      <h4>New Blog</h4>
      <form>
        <label for="title">Title</label>
        <input type="text" id="title" placeholder="Type blog title" />
        <label for="content">Content</label>
        <textarea type="text" id="title" placeholder="Type blog content" />
      </form>
    </div>
  );
};

export default Create;
