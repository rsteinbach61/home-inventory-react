require 'pry'
class HomeController < ApplicationController

  def index

    @homes = Home.all
    render json: @homes
  end

  def new
    @home = Home.new(home_params)
  end

  def create
    @home = Home.new(name: params[:homename])
    @home.save
    render json:@home
  end

  def destroy
    @home = Home.find_by(id: params[:_json])
    @home.destroy
    @homes = Home.all
    render json: @homes
  end

  def rooms
    @house = Home.find_by(:id => params[:id])
    @rooms = @house.rooms
    render json: @rooms
  end

 private
   def home_params
     params.require(:home).permit(:name, :user_id, :room_id)
   end

end
