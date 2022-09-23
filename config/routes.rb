Rails.application.routes.draw do
  resources :appointments
  resources :patients
  resources :doctors
  resources :medicines, only: [:index, :show]
  resources :frequencies, only: [:index, :show]
  resources :preescriptions
  post "/signup", to: "doctors#create"
  post "/signupPatient", to: "patients#create"
  get "/me", to: "doctors#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  delete "/deleteAccount", to: "doctors#destroy"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
