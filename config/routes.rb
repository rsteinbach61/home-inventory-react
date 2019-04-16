Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  scope '/api/' do
  #  get :home, to: 'home#index'
  #  post :create, to: 'home#create'
  #  post :delete, to: 'home#delete'
    get :rooms, to: 'room#index'
    get 'home/:id/rooms', to: 'home#rooms'
    get 'room/:id/items', to: 'room#items'
    resources :home
    resources :item
    resources :room
  end
end
