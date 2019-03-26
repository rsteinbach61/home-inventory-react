require 'pry'
class RoomController < ApplicationController
  def new
    @room = Room.new(room_params)
  end

  def create

    @room = Room.create(name: params[:roomname], home_id: params[:houseId])

    render json:@room
  end

  def items
    @room = Room.find_by(:id => params[:id])

    @items = @room.items
    render json: @items
  end

  def delete
      #binding.pry
    @room = Room.find_by(id: params[:_json])
    @house = Home.find_by(id: @room.home_id)
    @room.destroy
    @rooms = @house.rooms
    render json: @rooms
  end

  def index
    @rooms = Room.all
    render json:@rooms
  end

  def edit
  end

  private
    def room_params
      params.require(:room).permit(:name, :user_id, :home_id)
    end

end
