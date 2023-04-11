import { useMemo, useCallback } from "react";
import { Form, Segment, Icon, Header } from "semantic-ui-react";
import { useRouter } from "next/router";

function ImageDropDiv({
  highlighted,
  setHighlighted,
  inputRef,
  handleChange,
  mediaPreview,
  setMediaPreview,
  setMedia,
  profilePicUrl
}) {
  const router = useRouter();

  const signupRoute = useMemo(() => router.pathname === "/signup", [router]);

  const checkForSignupPage = useCallback(() => {
    return signupRoute ? (
      <Header icon>
        <Icon
          name="file image outline"
          style={{ cursor: "pointer" }}
          onClick={() => inputRef.current.click()}
          size="huge"
        />
        Drag n Drop or Click to upload image
      </Header>
    ) : (
      <div style={{ textAlign: "center" }}>
        <img
          src={profilePicUrl}
          alt="Profile pic"
          style={{ cursor: "pointer", height: "50%", width: "50%" }}
          onClick={() => inputRef.current.click()}
        />
        <h3>Drag n Drop or Click to upload image</h3>
      </div>
    );
  }, [signupRoute]);

  const dragEvent = (e, valueToSet) => {
    e.preventDefault();
    setHighlighted(valueToSet);
  };

  return (
    <Form.Field>
      <Segment placeholder basic secondary>
        <input
          style={{ display: "none" }}
          type="file"
          accept="image/*"
          onChange={handleChange}
          name="media"
          ref={inputRef}
        />

        <div
          onDragOver={e => dragEvent(e, true)}
          onDragLeave={e => dragEvent(e, false)}
          onDrop={e => {
            dragEvent(e, true);

            const droppedFile = Array.from(e.dataTransfer.files);

            if (droppedFile?.length > 0) {
              setMedia(droppedFile[0]);
              setMediaPreview(URL.createObjectURL(droppedFile[0]));
            }
          }}
        >
          {mediaPreview === null ? (
            <>
              <Segment {...(highlighted && { color: "green" })} placeholder basic>
                {checkForSignupPage()}
              </Segment>
            </>
          ) : (
            <Segment color="green" placeholder basic>
              <img
                src={mediaPreview}
                alt="Profile pic"
                style={{ cursor: "pointer", height: "90%", width: "90%" }}
                onClick={() => inputRef.current.click()}
              />
            </Segment>
          )}
        </div>
      </Segment>
    </Form.Field>
  );
}

export default ImageDropDiv;
