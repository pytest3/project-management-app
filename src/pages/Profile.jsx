export default function ProfilePage() {
  return (
    <>
      <ul>
        <li>
          <h1>Add/Change Profile Picture</h1>
          <button>Choose image</button>
          <button>Upload image</button>
        </li>
        <li>
          <h1>Bio</h1>
          <label htmlFor="bio">Describe yourself</label>
          <textarea id="bio" name="bio" rows="4" cols="50"></textarea>
        </li>
      </ul>
    </>
  );
}
