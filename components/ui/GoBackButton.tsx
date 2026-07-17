"use client";

import { FiArrowLeft } from "react-icons/fi";

/** Small client-only button so the 404 page can stay a server component for metadata. */
export function GoBackButton() {
  return (
    <button type="button" onClick={() => window.history.back()} className="btn-secondary">
      <FiArrowLeft size={16} /> Go Back
    </button>
  );
}
