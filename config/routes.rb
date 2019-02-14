Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  scope '/api/' do
    get :home, to: 'home#index'
    post :create, to: 'home#create'
    post :delete, to: 'home#delete'
    post :createroom, to: 'room#create'
  end
end
