"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import dynamic from "next/dynamic";
// const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const ReactQuilTag = ({ richText, setValueOfRichText }) => {
  const [client, setClient] = useState(false);
  const quillRef = useRef(null);

  useEffect(() => {
    setClient(true);
  }, []);

  const handleImageUpload = () => {
    if (!client) return;

    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = async () => {
      const file = input.files[0];
      const formData = new FormData();
      formData.append("image", file);

      const res = await fetch(`https://api.imgbb.com/1/upload?key=${process.env.IMGBB_API_KEY}`, {
        method: "POST",
        body: formData,
      });
      const result = await res.json();
      const url = result.data?.url;

      if (url) {
        const quill = quillRef.current.getEditor(); 
        const range = quill.getSelection();
        quill.insertEmbed(range.index, "image", url);
      }
    };
  };

  const modules = useMemo(() => {
    if (!client) return {}; // Ensure modules are only defined on the client side

    return {
      toolbar: {
        container: [
          [{ font: [] }],
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          ["bold", "italic", "underline", "strike"],
          [{ color: [] }, { background: [] }],
          [{ script: "sub" }, { script: "super" }],
          ["blockquote", "code-block"],
          [{ list: "ordered" }, { list: "bullet" }],
          [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
          [{ direction: "rtl" }],
          [{ size: ["small", false, "large", "huge"] }],
          ["image"],
          ["clean"],
        ],
        handlers: {
          image: handleImageUpload,
        },
      },
      history: {
        delay: 500,
        maxStack: 100,
        userOnly: true,
      },
    };
  }, [client]);

  return (
    <div className="blog gap-5 mb-8">
      <div className="w-full text-sm mb-2 mt-3">
        <p>Blog Description</p>
      </div>
      <div className="w-full md:h-[280px] h-[350px]">
        {client && (
          <ReactQuill
            ref={quillRef} // Attach the ref to ReactQuill
            theme="snow"
            value={richText}
            onChange={setValueOfRichText}
            modules={modules}
            style={{ height: 250, marginBottom: 12, borderRadius: 10 }}
          />
        )}
      </div>
    </div>
  );
};

export default ReactQuilTag;
