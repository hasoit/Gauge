export const Row = ({ children }: { children: React.ReactNode }) => {
  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "8px" }}>
      {children}
    </div>
  );
};

export const Col = ({ children }: { children: React.ReactNode }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      {children}
    </div>
  );
};
