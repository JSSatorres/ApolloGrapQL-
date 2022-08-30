import React from "react";

function CharacterCard({ character }) {
  return (
    <section key={character.id} className="col-6 px-2">
      <div className="container py-2">
        <div className="row d-flex ">
          <div className="card">
            <div className="card-body p-4">
              <div className="d-flex text-black col-4">
                <div className="flex-shrink-0 col-6">
                  <img
                    src={character.image}
                    alt={character.name}
                    className="img-fluid img-thumbnail"
                    height="20px"
                  />
                </div>
                <div className="flex-grow-1 ms-3 col-8">
                  <h5 className="mb-1">{character.name}</h5>
                  <div className="d-flex justify-content-start rounded-3 p-2 mb-2">
                    <div>
                      <p className="small text-muted mb-1">Gender</p>
                      <p className="mb-0">{character.gender}</p>
                    </div>
                    <div className="px-3">
                      <p className="small text-muted mb-1">Species</p>
                      <p className="mb-0">{character.species}</p>
                    </div>
                    <div>
                      <p className="small text-muted mb-1">Status</p>
                      <p className="mb-0">{character.status}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CharacterCard;
